import Layout from '@/components/layout/Layout';

type Props = {
  params: {
    slug: string;
  };
};

const page = ({ params: { slug } }: Props) => {
  return (
    <Layout currentPath="/posts" pageTitle="deneme">
      <div>post: {slug}</div>
    </Layout>
  );
};

export default page;
