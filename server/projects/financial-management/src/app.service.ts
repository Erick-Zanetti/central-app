import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FinancialReleaseDTO } from './dto/financial-release.dto';
import { FinancialRelease, FinancialReleaseDocument, FinancialReleaseType } from './models/financial-release.schema';

@Injectable()
export class AppService {

  constructor(
    @InjectModel(FinancialRelease.name) private financialReleaseModel: Model<FinancialReleaseDocument>
  ) { }

  getHello(): string {
    return 'Hello World!';
  }

  async create(financialReleaseDto: FinancialReleaseDTO): Promise<FinancialRelease> {
    const createdCat = new this.financialReleaseModel(financialReleaseDto);
    return createdCat.save();
  }

  async findAll(): Promise<FinancialReleaseDTO[]> {
    return this.financialReleaseModel.find();
  }

  async findOne(id: string): Promise<FinancialReleaseDTO> {
    return this.financialReleaseModel.findById(id);
  }

  async update(id: string, financialReleaseDto: FinancialReleaseDTO): Promise<FinancialRelease> {
    return this.financialReleaseModel.findByIdAndUpdate(id, financialReleaseDto, { overwrite: true, new: true }).exec();
  }

  async remove(id: string): Promise<FinancialReleaseDTO> {
    return this.financialReleaseModel.findByIdAndDelete(id).exec();
  }

  async findByType(type: FinancialReleaseType, month: number, year: number): Promise<FinancialReleaseDTO[]> {
    return this.financialReleaseModel.find({
      'type': type,
      'month.month': month,
      'month.year': year
    });
  }
}
