import { BaseEntity } from 'app/core/common-models/base-entity.model';

export class Province extends BaseEntity {
    id: number;
    name: string;
    provinceCode: string;
}