export default function Testimoni() {
  return (
    <div className='flex flex-col items-center justify-center gap-5'>
      <div className='flex flex-col items-center justify-center gap-3'>
        <h1 className='text-[35px] font-bold'>What Political Figure Say</h1>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-dark_gray'>
            These are the stories of political figure who have joined us with
            great
          </p>
          <p className='text-dark_gray'>
            pleasure when using this crazy feature.
          </p>
        </div>
      </div>
      <div className='flex items-center justify-center gap-5 py-5'>
        <div className='flex h-[250px] min-w-[300px] flex-col items-center justify-start gap-5 rounded-xl border border-soft_gray px-10 pb-12 pt-8'>
          <div className='flex w-full items-center justify-start gap-3'>
            <div className='rounded-full'>
              <img src='AboutUs/airlangga.svg' alt='data' />
            </div>
            <div>
              <h1 className='font-bold'>Airlangga Hartanto</h1>
              <p className='text-dark_gray text-[14px]'>
                Menteri Koordinator dan Perekonomian RI
              </p>
            </div>
          </div>
          <div className='flex w-full flex-col items-center justify-center gap-3'>
            <p className='flex w-[300px] items-center justify-center text-justify'>
              Saya minta kepada segenap pengurus DPD, provinsi, kabupten dan
              kota, untuk kita harus memiliki roadmap 2024. Di tahun melakukan
              penggalangan opini masyarakat
            </p>
          </div>
        </div>
        <div className='flex h-[250px] min-w-[300px] flex-col items-center justify-start gap-5 rounded-xl border border-soft_gray px-10 pb-12 pt-8'>
          <div className='flex w-full items-center justify-start gap-3'>
            <div className='rounded-full'>
              <img src='AboutUs/jokowi.svg' alt='data' />
            </div>
            <div>
              <h1 className='font-bold'>Jokowi Dodo</h1>
              <p className='text-dark_gray text-[14px]'>Presiden RI</p>
            </div>
          </div>
          <div className='flex w-full flex-col items-center justify-center gap-3'>
            <p className='flex w-[300px] items-center justify-center text-justify text-[16px]'>
              Daerah merupakan bagian dari pemerintah yang langsung berinteraksi
              dengan
            </p>
          </div>
        </div>
        <div className='flex h-[250px] min-w-[300px] flex-col items-center justify-start gap-5 rounded-xl border border-soft_gray px-10 pb-12 pt-8'>
          <div className='flex w-full items-center justify-start gap-3'>
            <div className='rounded-full'>
              <img src='AboutUs/puan.svg' alt='data' />
            </div>
            <div>
              <h1 className='font-bold'>Puan Maharani</h1>
              <p className='text-dark_gray text-[14px]'>
                Ketua DPR dan Fraksi PDI Perjuangan
              </p>
            </div>
          </div>
          <div className='flex w-full flex-col items-center justify-center gap-3'>
            <p className='flex w-[300px] items-center justify-center text-justify text-[16px]'>
              Daerah merupakan bagian dari pemerintah yang langsung berinteraksi
              dengan masyarakat ketikaproses demokratisasi berlangsung.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
