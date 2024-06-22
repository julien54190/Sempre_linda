

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export const AdminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  if (authService.isAuthenticated()) {
    return authService.isAdmin().pipe(
      map(isAdmin => {
        console.log('AdminGuard isAdmin status:', isAdmin);
        if (isAdmin) {
          return true;
        } else {
          router.navigate(['/home']);
          return false;
        }
      })
    );
  } else {
    router.navigate(['/auth/login']);
    return false;
  }
};
