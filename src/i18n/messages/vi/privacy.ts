export const privacy = {
  title: 'Quyền riêng tư',
  updated: 'Cập nhật ngày 2 tháng 11 năm 2026.',
  intro:
    'Nihongoes là trang học tiếng Nhật. Trang này nói rõ dữ liệu Google mà trang xin và dữ liệu đó được dùng thế nào. Trên màn hình đồng ý của Google, app có tên nihongoes.',
  google: {
    title: 'Dữ liệu Google mà trang truy cập',
    body: 'Khi bạn bấm Sign in with Google ở trang flashcard, Nihongoes chỉ xin một quyền: https://www.googleapis.com/auth/drive.appdata. Quyền này chỉ cho trang đọc và ghi những file do chính nó tạo, trong thư mục app data ẩn trên Google Drive của bạn. Nihongoes không xem phần còn lại của Drive, Gmail, danh bạ, hay file khác.'
  },
  file: {
    title: 'File được lưu',
    body: 'Collection flashcard nằm trong một file tên nihongoes-flashcards.json. File gồm những collection bạn tạo và các sửa đổi trên collection có sẵn. File không chứa mật khẩu Google.'
  },
  use: {
    title: 'Cách dùng',
    body: 'File chỉ dùng để hiện, tạo, đổi tên và xóa collection flashcard trong Nihongoes. Chúng tôi không dùng file để quảng cáo, không bán, và không chia sẻ cho bên khác.'
  },
  storage: {
    title: 'File nằm ở đâu',
    body: 'File ở trên Google Drive của bạn. Trình duyệt nói chuyện thẳng với Google. Nihongoes không có máy chủ để giữ một bản sao. Token đăng nhập chỉ nằm trong bộ nhớ trình duyệt trong lần dùng đó, và không được ghi vào localStorage.'
  },
  limited: {
    title: 'Giới hạn sử dụng',
    body: 'Việc dùng dữ liệu Google tuân theo Google API Services User Data Policy, gồm các yêu cầu Limited Use. Nihongoes chỉ dùng dữ liệu này để chạy tính năng flashcard trên trang. Chúng tôi không chuyển dữ liệu đi đâu ngoài Google, khi cần đọc và ghi file đó. Không ai đọc nội dung file. Chúng tôi không dùng dữ liệu cho quảng cáo hay để đánh giá tín dụng.'
  },
  delete: {
    title: 'Ngắt kết nối và xóa',
    body: 'Xóa một collection trong Nihongoes thì thay đổi đó được ghi vào file. Để ngắt kết nối, mở Google Account, vào Third-party apps and services, chọn nihongoes, rồi gỡ quyền truy cập: https://myaccount.google.com/permissions. Google xóa thư mục app data ẩn khi app bị gỡ khỏi tài khoản.'
  },
  other: {
    title: 'Dữ liệu không lấy từ Google',
    body: 'Lựa chọn Word first hoặc Meaning first, ngôn ngữ trang, và furigana nằm trên trình duyệt này. Chúng không được gửi lên Google Drive.'
  },
  contact: {
    title: 'Liên hệ',
    body: 'Câu hỏi về trang này hoặc file flashcard: chtam106@gmail.com.'
  }
};
