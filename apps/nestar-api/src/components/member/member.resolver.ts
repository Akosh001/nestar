import { Mutation, Resolver, Query, Args } from '@nestjs/graphql';
import { MemberService } from './member.service';
import { Member } from '../../libs/dto/member/member';
import { InternalServerErrorException, UsePipes, ValidationPipe } from '@nestjs/common';
import { LoginInput, MemberInput } from '../../libs/dto/member/member.input';

@Resolver()
export class MemberResolver {
	constructor(private readonly memberService: MemberService) {}

	@Mutation(() => Member)
	@UsePipes(ValidationPipe)
	public async signup(@Args('input') input: MemberInput): Promise<Member> {
		console.log('inputim', input);
		console.log('Mutation: signup');
		return this.memberService.signup(input);
	}

	@Mutation(() => Member)
	@UsePipes(ValidationPipe)
	public async login(@Args('input') input: LoginInput): Promise<Member> {
		console.log('inputim', input);
		console.log('Mutation: login');
		return this.memberService.login(input);
	}

	@Mutation(() => String)
	public async updateMember(): Promise<String> {
		console.log('Mutation: updateMember');
		return this.memberService.updateMember();
	}

	@Query(() => String)
	public async getMember(): Promise<String> {
		console.log('Query: getMember');
		return this.memberService.getMember();
	}
}
