import { Controller, Post } from '@nestjs/common';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
    constructor(private messageService:MessageService){}
    @Post()
    createMessage(){
        return this.messageService.createMessage()
    }
}
