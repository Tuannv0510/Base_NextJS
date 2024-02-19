import { FC, ReactNode } from "react";
import HeaderSupportItem, { HeaderSupportItemProps } from "./HeaderSupportItem";

interface SupportItemProps extends HeaderSupportItemProps {
  IconItemSupport?: ReactNode;
}

const SupportItem: FC<SupportItemProps> = ({
  IconHeader,
  IconItemSupport,
  headerDetail,
}) => {
  return (
    <div>
      <HeaderSupportItem IconHeader={IconHeader} headerDetail={headerDetail} />

      <div className="mt-8 grid grid-cols-2 gap-6 pl-2">
        {Array(4)
          .fill("")
          .map((_, index) => {
            return (
              <div className="flex items-center text-white" key={index}>
                {IconItemSupport}

                <div className="ml-2">
                  <h4>Mrs.Mai</h4>
                  <span>0394.969.000</span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SupportItem;
