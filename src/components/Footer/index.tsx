import Link from 'next/link';
import { ImInstagram, ImFacebook, ImTwitter } from 'react-icons/im';

interface FooterContent {
  name: string;
  list: string[];
}

const footerContent: FooterContent[] = [
  {
    name: 'Product',
    list: ['Download', 'Pricing', 'Location', 'Server', 'Countries', 'Blog'],
  },
  {
    name: 'Engage',
    list: [
      'Geolabs ?',
      'FAQ',
      'Tutorials',
      'About Us',
      'Privacy Policy',
      'Terms of Service',
    ],
  },
  {
    name: 'Earn Money',
    list: ['Affiliate', 'Become Partner'],
  },
];

export default function Footer() {
  return (
    <footer className='h-[415px] divide-y bg-soft_gray px-4'>
      <div className='container mx-auto flex flex-col justify-between space-y-8 py-10 lg:flex-row lg:space-y-0'>
        <div className='flex w-[40%] flex-col justify-start gap-3 p-10'>
          <div>
            <a
              rel='noopener noreferrer'
              href='#'
              className='flex justify-center space-x-1 lg:justify-start'
            >
              <div className='flex h-12 w-12 items-center justify-center rounded-full'>
                <svg
                  width='31'
                  height='30'
                  viewBox='0 0 31 30'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clip-path='url(#clip0_1_1574)'>
                    <path
                      d='M2.17055 1.12207H4.91055C6.35473 1.12207 7.52547 2.29281 7.52547 3.73699V3.73699V3.73699C7.52547 5.95679 7.03539 8.14921 6.0902 10.1577L4.82884 12.8381L2.81673 17.8737C1.93918 20.0699 0.90731 22.4271 1.49637 24.7176V24.7176V24.7176C2.022 26.7614 4.14677 28.1683 6.24244 28.4164C6.28092 28.421 6.31987 28.4254 6.3593 28.4296C7.83254 28.5858 8.82663 28.5515 9.77579 28.4429C10.9321 28.3104 12.4058 27.5667 13.4464 27.0455V27.0455C14.9044 26.3151 16.1847 26.4928 17.7157 27.0541C18.5827 27.372 19.5978 27.7453 20.6031 28.1177C21.8216 28.5691 23.3848 28.8322 24.6265 28.4493V28.4493C24.8294 28.3868 24.7873 28.3907 24.9818 28.3058C25.5382 28.0629 26.7427 27.4981 27.3075 26.9333C27.7235 26.5172 28.1395 25.8699 28.4269 25.3772C28.6904 24.9253 28.7813 24.8569 28.9023 24.348V24.348C29.1185 23.4391 28.807 22.0842 28.4796 21.2091C27.6053 18.8719 27.0332 17.4741 25.9345 14.9423C25.3063 13.4947 24.4802 11.6811 23.78 10.1634C22.8502 8.14779 22.3569 5.95671 22.3569 3.73699V3.73699V3.73699C22.3569 2.29281 23.5277 1.12207 24.9719 1.12207H27.2829'
                      stroke='#3476F2'
                      stroke-width='3.6044'
                    />
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M18.0411 19.5377L14.9098 22.669L12.4122 20.1713L10.2908 22.2927L12.7885 24.7903L14.9098 26.9116L17.0311 24.7903L20.1624 21.659C23.0633 18.758 23.0633 14.0547 20.1624 11.1537C17.2615 8.25279 12.5581 8.25279 9.65715 11.1537C7.16755 13.6433 6.81453 17.4605 8.59812 20.3265L10.8191 18.1055C10.1528 16.4995 10.4726 14.581 11.7785 13.2751C13.5078 11.5457 16.3117 11.5457 18.0411 13.2751C19.7705 15.0044 19.7705 17.8083 18.0411 19.5377Z'
                      fill='#3476F2'
                    />
                    <path
                      d='M14.741 18.2598C15.858 18.2598 16.7635 17.3543 16.7635 16.2373C16.7635 15.1203 15.858 14.2148 14.741 14.2148C13.624 14.2148 12.7185 15.1203 12.7185 16.2373C12.7185 17.3543 13.624 18.2598 14.741 18.2598Z'
                      fill='#3476F2'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_1_1574'>
                      <rect width='30.6742' height='30' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span className='self-center text-2xl font-semibold'>
                GEOLABS
              </span>
            </a>
          </div>
          <p className='text-regent_gray p-2 text-[16px]'>
            <span className='font-bold'>Geolabs</span> is a private virtual
            network that has unique features and has high security.
          </p>
          <div className='flex gap-5 p-2'>
            <div className='hover:bg-primary_blue text-primary_blue flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white shadow-lg hover:text-white'>
              <ImFacebook size={20} />
            </div>
            <div className='hover:bg-primary_blue text-primary_blue flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white shadow-lg hover:text-white'>
              <ImTwitter size={20} />
            </div>
            <div className='hover:bg-primary_blue text-primary_blue flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white shadow-lg hover:text-white'>
              <ImInstagram size={20} />
            </div>
          </div>
        </div>
        <div className='flex w-[60%] justify-center gap-x-56 gap-y-8 p-10'>
          {footerContent.map((content) => (
            <div key={content.name} className='flex flex-col gap-10'>
              <h3 className='text-[16px] font-bold'>{content.name}</h3>
              <ul className='text-regent_gray flex flex-col gap-5'>
                {content.list.map((listItem, listIndex) => (
                  <Link href={'#'} className='hover:underline' key={listIndex}>
                    {listItem}
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
