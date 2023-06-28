import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MonthValueDTO } from './../../dto/month-value';
import {
  MonthValue,
  MonthValueDocument,
} from './../../models/month-value.schema';

@Injectable()
export class MonthValueService {
  constructor(
    @InjectModel(MonthValue.name)
    private monthValueModel: Model<MonthValueDocument>,
  ) {}

  async create(monthValueDTO: MonthValueDTO): Promise<MonthValue> {
    const createdCat = new this.monthValueModel(monthValueDTO);
    return createdCat.save();
  }

  async findOne(month: number, year: number): Promise<MonthValueDTO> {
    return this.monthValueModel.findOne({ month, year }).exec();
  }

  async update(id: string, monthValueDTO: MonthValueDTO): Promise<MonthValue> {
    return this.monthValueModel
      .findByIdAndUpdate(id, monthValueDTO, { overwrite: true, new: true })
      .exec();
  }
}
