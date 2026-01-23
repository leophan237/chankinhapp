import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đạo Tràng - Chân Kinh Online",
  description: "Community of Reflections - Share and discover mindful insights.",
};

export default function DaoTrangLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Đạo Tràng page sẽ tự quản lý navigation riêng (giống Threads)
  // Không sử dụng Navigation component chính
  return <>{children}</>;
}
