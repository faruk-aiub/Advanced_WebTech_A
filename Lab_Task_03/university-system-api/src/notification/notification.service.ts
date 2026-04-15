import { Injectable , Inject, forwardRef} from '@nestjs/common';
import { EnrollmentService } from '../enrollment/enrollment.service';
import { send } from 'process';

@Injectable()
export class NotificationService {
  constructor(
    @Inject(forwardRef(() => EnrollmentService))
    private enrollmentService: EnrollmentService
  ) {}
}

send
