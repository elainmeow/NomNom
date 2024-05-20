import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrl: './profile-user.component.css'
})
export class ProfileUserComponent implements OnInit{
  resetImage() {
  throw new Error('Method not implemented.');
  }
  onFileSelected($event: Event) {
  throw new Error('Method not implemented.');
  }
    admin: any;
  imageUrl: any;
 
    constructor(private userService: UserService, private router:Router) { }
 
    ngOnInit(): void {
      this.getAdminProfile();
    }
 
    getAdminProfile(): void {
      this.admin = this.userService.currentUser; // Giả định rằng UserService đã có thông tin admin
    }
 
 
    saveChanges(): void {
      // Lấy dữ liệu cần cập nhật từ thành phần HTML hoặc từ các biến trong component
      const userData: any = {
        // Dữ liệu cần cập nhật, ví dụ:
        name: this.admin.name,
        email: this.admin.email,
        // Các trường dữ liệu khác nếu có
      };
 
      const id = this.admin.id;
 
      // Gọi service để cập nhật dữ liệu lên MongoDB
      this.userService.updateUsers(userData, id).subscribe(
        (      response: any) => {
          console.log('Data updated successfully:', response);
          // Xử lý khi cập nhật thành công, ví dụ: hiển thị thông báo thành công cho người dùng
        },
        (      error: any) => {
          console.error('Error updating data:', error);
          // Xử lý khi có lỗi xảy ra, ví dụ: hiển thị thông báo lỗi cho người dùng
        }
      );
    }
 
  }
 
