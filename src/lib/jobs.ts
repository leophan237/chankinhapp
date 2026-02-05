export interface JobPosition {
    id: string;
    title: string;
    department: string;
    location: string;
    type: 'Full-time' | 'Part-time' | 'Contract';
    salary?: string;
    description: string;
    larkDocUrl: string;
    larkFormUrl: string;
}

export const JOB_OPENINGS: JobPosition[] = [
    {
        id: 'store-manager',
        title: 'Quản Lý Cửa Hàng (Store Manager)',
        department: 'Management',
        location: 'TP. Hồ Chí Minh',
        type: 'Full-time',
        salary: 'Thoả thuận',
        description: 'Chịu trách nhiệm vận hành, quản lý nhân sự và đảm bảo chất lượng dịch vụ tại cơ sở Chân Kinh F&B.',
        larkDocUrl: 'https://blankinc.sg.larksuite.com/wiki/QvvjwST9MigeKQkH7I3lyenRglh',
        larkFormUrl: 'https://blankinc.sg.larksuite.com/share/base/form/shrlgRQNJKM9v59VneLMVvlrYub'
    },
    {
        id: 'barista-premium',
        title: 'Nghệ Nhân Pha Chế (Barista)',
        department: 'Operations',
        location: 'TP. Hồ Chí Minh',
        type: 'Full-time',
        salary: '8.000.000 - 12.000.000 VNĐ',
        description: 'Pha chế các thức uống theo tiêu chuẩn Chân Kinh, duy trì không gian thiền định và thanh tịnh.',
        larkDocUrl: 'https://blankinc.sg.larksuite.com/wiki/QvvjwST9MigeKQkH7I3lyenRglh',
        larkFormUrl: 'https://blankinc.sg.larksuite.com/share/base/form/shrlgRQNJKM9v59VneLMVvlrYub'
    },
    {
        id: 'content-creator',
        title: 'Người Sáng Tạo Nội Dung (Content Creator)',
        department: 'Marketing',
        location: 'Remote / Hybrid',
        type: 'Full-time',
        salary: 'Thoả thuận',
        description: 'Truyền tải triết lý và câu chuyện của Chân Kinh F&B qua các kênh truyền thông số.',
        larkDocUrl: 'https://blankinc.sg.larksuite.com/wiki/QvvjwST9MigeKQkH7I3lyenRglh',
        larkFormUrl: 'https://blankinc.sg.larksuite.com/share/base/form/shrlgRQNJKM9v59VneLMVvlrYub'
    }
];
