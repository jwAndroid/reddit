import { IsEmail, Length } from "class-validator";
import { BeforeInsert, Column, Entity, Index, OneToMany } from "typeorm";
import bcrypt from "bcryptjs";

@Entity("users")
export class User {
  @Index()
  @IsEmail(undefined, { message: "Must be a valid email address" })
  @Length(1, 255, { message: "Must not be empty" })
  @Column()
  email: string;

  @Index()
  @Length(3, 255, { message: "3 error" })
  @Column()
  username: string;

  @Column()
  @Length(6, 255, { message: "6 error" })
  password: string;

  /**
   * user -> create posts
   */
  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  /**
   * vote -> create votes
   */
  @OneToMany(() => Vote, (vote) => vote.user)
  votes: Vote[];

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 6);
  }
}
