import { Controller, Param, Body, Post } from '@nestjs/common';

/** USE CLASS-VALIDATOR 😉 */

export class ValidateParams {
  public id: number;

  constructor(id: number) {
    this.id = id;
  }
}

export class ValidateBody {
  public name: string;

  public isAdult: boolean;

  public children: number;

  constructor(name: string, isAdult: boolean, children: number) {
    this.name = name;
    this.isAdult = isAdult;
    this.children = children;
  }
}

@Controller('validation')
export class ValidationController {
  constructor() {}

  @Post(':id')
  public validate(@Param() params: ValidateParams, @Body() body: ValidateBody) {
    //This block should be empty
  }
}
