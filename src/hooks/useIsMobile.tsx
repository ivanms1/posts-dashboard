import { useMediaQuery } from "@react-hook/media-query";

function useIsMobile() {
  const isMobile = useMediaQuery("only screen and (max-width: 992px)");
  return isMobile;
}

export default useIsMobile;
