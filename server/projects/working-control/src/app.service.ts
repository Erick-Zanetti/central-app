import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TaskDTO } from './../dto/task';
import { Task, TaskDocument } from './../models/task.schema';

@Injectable()
export class AppService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  getHello(): string {
    return 'Hello World!';
  }

  async create(taskDTO: TaskDTO): Promise<Task> {
    const createdCat = new this.taskModel(taskDTO);
    return createdCat.save();
  }

  async findAll(): Promise<TaskDTO[]> {
    return this.taskModel.find();
  }

  async findOne(id: string): Promise<TaskDTO> {
    return this.taskModel.findById(id);
  }

  async update(id: string, taskDTO: TaskDTO): Promise<Task> {
    return this.taskModel
      .findByIdAndUpdate(id, taskDTO, { overwrite: true, new: true })
      .exec();
  }

  async remove(id: string): Promise<TaskDTO> {
    return this.taskModel.findByIdAndDelete(id).exec();
  }
}
