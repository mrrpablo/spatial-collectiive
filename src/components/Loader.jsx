import { InfinitySpin } from 'react-loader-spinner';

function Loader() {
  return (
    <div className='flex justify-center mr-[58px]'>
      <InfinitySpin
        visible={true}
        width='100'
        color='#4fa94d'
        ariaLabel='infinity-spin-loading'
      />
    </div>
  );
}
export default Loader;
