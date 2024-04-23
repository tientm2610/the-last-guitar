import React from 'react';

function FooterComponent() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-center">
        <div className="p-5 w-48 ">
          <div className="text-xs uppercase text-gray-400 font-medium">Trang</div>
          <a className="my-3 block" href="/#">Trang Chủ <span className="text-teal-600 text-xs p-1"></span></a>
          <a className="my-3 block" href="/#">Giới Thiệu <span className="text-teal-600 text-xs p-1"></span></a>
          <a className="my-3 block" href="/#">Liên Hệ <span className="text-teal-600 text-xs p-1"></span></a>
        </div>
        <div className="p-5 w-48 ">
          <div className="text-xs uppercase text-gray-400 font-medium">Thông tin</div>
          <a className="my-3 block" href="/#">Blog <span className="text-teal-600 text-xs p-1"></span></a>
          <a className="my-3 block" href="/#">Dịch Vụ <span className="text-teal-600 text-xs p-1"></span></a>
          <a className="my-3 block" href="/#">FAQ <span className="text-teal-600 text-xs p-1"></span></a>
        </div>
        <div className="p-5 w-48 ">
          <div className="text-xs uppercase text-gray-400 font-medium">Theo dõi chúng tôi</div>
          <a className="my-3 block" href="/#">Facebook <span className="text-teal-600 text-xs p-1"></span></a>
          <a className="my-3 block" href="/#">Instagram <span className="text-teal-600 text-xs p-1"></span></a>
          <a className="my-3 block" href="/#">Twitter <span className="text-teal-600 text-xs p-1"></span></a>
        </div>
      </div>
      <div className="pt-2">
        <div className="flex pb-5 px-3 m-auto pt-5 border-t border-gray-500 text-gray-400 text-sm flex-col md:flex-row max-w-6xl">
          <div className="mt-2">Bản quyền © 2023 Công ty của bạn</div>
          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            <a href="/#" className="w-6 mx-1">
              <i className="uil uil-facebook-f"></i>
            </a>
            <a href="/#" className="w-6 mx-1">
              <i className="uil uil-twitter-alt"></i>
            </a>
            <a href="/#" className="w-6 mx-1">
              <i className="uil uil-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
