import { GvzBaseEntity } from '../commons/base.entity';
import { UserEntity } from '../users/users.entity';
import { Entity, Column, OneToOne, JoinColumn, ManyToOne } from 'typeorm';

@Entity('posts')
export class PostEntity extends GvzBaseEntity {

    @Column({ length: 240, nullable: true })
    text: string

    @Column('json', { default: [] })
    images: Array<string>

    @ManyToOne(() => UserEntity)
    @JoinColumn({ name: 'author_id' })
    author: UserEntity

    @Column({ name: 'like_count', default: 0 })
    likeCount: number

    @Column({ name: 'repost_count', default: 0 })
    repostCount: number

    @Column('json', { default: [] })
    hashtags: Array<string>

    @Column('json', { default: [] })
    mentions: Array<Mention>

    @OneToOne(() => PostEntity)
    @JoinColumn({ name: 'orig_post_id' })
    origPost: PostEntity

    @OneToOne(() => PostEntity)
    @JoinColumn({ name: 'reply_post_id' })
    replyPost: PostEntity



}

class Mention {
    name: string
    id: string
}