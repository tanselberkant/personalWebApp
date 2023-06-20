'use client';
import Layout from '@/components/layout/Layout';

export default async function DashboardPage() {
  // var myHeaders = new Headers();
  // myHeaders.append(
  //   'Authorization',
  //   `${process.env.NEXT_PUBLIC_GITHUB_API_TOKEN}`
  // );

  // var requestOptions = {
  //   method: 'GET',
  //   headers: myHeaders,
  //   redirect: undefined,
  // };

  // fetch(
  //   'https://api.github.com/repos/tanselberkant/personalWebApp/commits',
  //   requestOptions
  // )
  //   .then((response) => response.json())
  //   .then((result) => console.log(result))
  //   .catch((error) => console.log('error', error));
  return (
    <>
      <Layout pageTitle="Dashboard" currentPath={'/dashboard'}>
        <div className=" mb-10">
          <h1 className=" text-light-textHeader dark:text-dark-textHeader uppercase text-2xl font-bold">
            Dashboard
          </h1>
          <p className="mt-1 mb-8 text-light-textDescription dark:text-dark-textDescription">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
      </Layout>
    </>
  );
}
