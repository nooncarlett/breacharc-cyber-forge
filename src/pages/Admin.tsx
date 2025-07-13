import AdminAuth from '@/components/AdminAuth';
import AdminJobManager from '@/components/AdminJobManager';

export default function Admin() {
  return (
    <AdminAuth>
      <div className="container mx-auto px-4 py-8">
        <AdminJobManager />
      </div>
    </AdminAuth>
  );
}