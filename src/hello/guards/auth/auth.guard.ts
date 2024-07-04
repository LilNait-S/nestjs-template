import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // uso en cuanto a roles para las apis a mostrar
    const request = context.switchToHttp().getRequest() as Request;
    console.log(request.url);

    if (!request.headers['authorization']) return false;

    // if (request.url === '/greet') return false;
    return true;
  }
}
