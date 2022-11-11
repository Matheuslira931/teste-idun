import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { UserDto } from './dto/user.dto';


@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>) {
  }

  async FindAll(): Promise<UserDto[]> {
    return this.userRepository.find();
  }

  async create(createClienteDto: UserDto): Promise<UserDto> {
    return this.userRepository.save(createClienteDto);
  }

  async findOne(id: number): Promise<UserDto> {
    return this.userRepository.findOne({ where: { id } });
  }

  async update(id: number, updateClienteDto: UserDto): Promise<UserDto> {
    this.userRepository.update(id, updateClienteDto);
    return updateClienteDto;
  }

  async remove(id: number): Promise<string> {
    this.userRepository.delete(id);
    return "usuário deletado com sucesso!";
  }
}
