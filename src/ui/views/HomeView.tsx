// Components
import { Building } from '../components';
// Layouts
import { MainLayout } from '@/ui/layouts';


export const HomeView = () => {
  return (
    <MainLayout
      pageTitle='Inicio'
    >
      <Building />
    </MainLayout>
  );
}
