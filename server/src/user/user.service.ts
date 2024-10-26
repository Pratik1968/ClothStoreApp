import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return { status: 'sucess' };
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
  verifyOtp(data: { otp: string }) {
    console.log(data);
    const isOtpRight = data.otp == '1234' ? true : false;
    if (isOtpRight) return { status: 'success', id: 1, token: '12' };
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }
}
