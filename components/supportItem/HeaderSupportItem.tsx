import { FC, ReactNode } from "react";

export interface HeaderSupportItemProps {
  IconHeader?: ReactNode;
  headerDetail?: {
    title: string;
    subtile: string;
  };
}

const HeaderSupportItem: FC<HeaderSupportItemProps> = ({
  IconHeader,
  headerDetail,
}) => {
  return (
    <div className="px-7 py-5 relative">
      <div
        className="absolute opacity-40 inset-0 z-0 rounded-3xl border border-[#ffffff75]"
        style={{
          background: `linear-gradient(109.46deg, rgba(201, 201, 201, 0.8) 1.57%, rgba(196, 196, 196, 0.1) 100%),
    linear-gradient(108.87deg, rgba(255, 255, 255, 0.8) 0.66%, rgba(211, 211, 211, 0.1) 99.48%)`,
        }}
      ></div>

      <div className="flex items-center relative z-1">
        <div className="text-[#FF9E45]">{IconHeader}</div>

        {headerDetail && (
          <div className="text-white ml-3">
            <h3 className="text-base lg:text-xl font-medium">
              {headerDetail.title}
            </h3>
            <span className="text-base lg:text-xl font-medium mt-2">
              {headerDetail.subtile}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderSupportItem;
