import {
    Home,
    Users,
    GraduationCap,
    BookOpen,
    DollarSign,
    FileText,
    Megaphone,
    Clock,
    CreditCard,
    PiggyBank,
} from 'lucide-react'
import { MenuItem } from '@/types/sidebar'

export const menuItems: MenuItem[] = [
    { name: 'Dashboard', href: '/', icon: Home },
    {
        name: 'Kesantrian',
        href: '/kesantrian',
        icon: Users,
        subItems: [
            { name: 'Data Santri', href: '/kesantrian/data-santri' },
            { name: 'Tahfidz', href: '/kesantrian/tahfidz' },
            { name: 'Perizinan', href: '/kesantrian/perizinan' },
            { name: 'Pelanggaran', href: '/kesantrian/pelanggaran' },
            { name: 'Kesehatan', href: '/kesantrian/kesehatan' },
        ]
    },
    {
        name: 'Kepegawaian',
        href: '/kepegawaian',
        icon: GraduationCap,
        subItems: [
            { name: 'Data Pegawai', href: '/kepegawaian/data-pegawai' },
            { name: 'Data Guru', href: '/kepegawaian/data-guru' },
        ]
    },
    {
        name: 'Akademik',
        href: '/akademik',
        icon: BookOpen,
        subItems: [
            { name: 'Unit Pesantren', href: '/akademik/unit-pesantren' },
            { name: 'Kelas', href: '/akademik/kelas' },
            { name: 'Asrama', href: '/akademik/asrama' },
            { name: 'Konsulat', href: '/akademik/konsulat' },
            { name: 'Tahun Ajaran', href: '/akademik/tahun-ajaran' },
            { name: 'Kenaikan Kelas', href: '/akademik/kenaikan-kelas' },
            { name: 'Kelulusan', href: '/akademik/kelulusan' },
        ]
    },
    {
        name: 'Keuangan',
        href: '/keuangan',
        icon: DollarSign,
        subItems: [
            { name: 'Pembayaran', href: '/keuangan/pembayaran' },
            { name: 'Tagihan', href: '/keuangan/tagihan' },
            { name: 'Pembayaran Online', href: '/keuangan/pembayaran-online' },
            { name: 'Pemasukan', href: '/keuangan/pemasukan' },
            { name: 'Pengeluaran', href: '/keuangan/pengeluaran' },
        ]
    },
    {
        name: 'Laporan',
        href: '/laporan',
        icon: FileText,
        subItems: [
            { name: 'Laporan Pembayaran', href: '/laporan/pembayaran' },
            { name: 'Laporan Tabungan', href: '/laporan/tabungan' },
            { name: 'Laporan Kesehatan', href: '/laporan/kesehatan' },
            { name: 'Laporan Pelanggaran', href: '/laporan/pelanggaran' },
            { name: 'Laporan Perizinan', href: '/laporan/perizinan' },
            { name: 'Laporan Keuangan', href: '/laporan/keuangan' },
        ]
    },
    {
        name: 'Informasi',
        href: '/informasi',
        icon: Megaphone,
        subItems: [
            { name: 'Broadcast', href: '/informasi/broadcast' },
            { name: 'Manajemen User', href: '/informasi/manajemen-user' },
        ]
    },
    {
        name: 'Absensi',
        href: '/absensi',
        icon: Clock,
        subItems: [
            { name: 'Absensi Harian', href: '/absensi/harian' },
            { name: 'Absensi Kunjungan', href: '/absensi/kunjungan' },
            { name: 'Absensi Makan', href: '/absensi/makan' },
        ]
    },
    {
        name: 'Kartu Santri',
        href: '/kartu-santri',
        icon: CreditCard,
        subItems: [
            { name: 'Cetak Kartu', href: '/kartu-santri/cetak' },
            { name: 'Pembayaran Koperasi', href: '/kartu-santri/koperasi' },
        ]
    },
    {
        name: 'Tabungan',
        href: '/tabungan',
        icon: PiggyBank,
        subItems: [
            { name: 'Tabungan Santri', href: '/tabungan/santri' },
            { name: 'Tabungan Khusus', href: '/tabungan/khusus' },
            { name: 'TopUp Tabungan', href: '/tabungan/topup' },
        ]
    },
]