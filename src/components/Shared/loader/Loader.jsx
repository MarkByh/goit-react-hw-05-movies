import { Oval } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div style={{ margin: '0 auto', paddingTop: '200px' }}>
      <Oval
        height={80}
        width={80}
        color="#4fa94d"
        wrapperStyle={{ justifyContent: 'center' }}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
}
