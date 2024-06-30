import { SVGProps } from "react";

interface GitlabIconProps extends SVGProps<SVGSVGElement>{}

const GitlabIcon: React.FC<GitlabIconProps> = (props) => {
  return (
    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M18.8646 10.1505L17.8624 7.06673L15.8749 0.946217C15.8225 0.788866 15.7216 0.652193 15.5866 0.555886C15.4516 0.459579 15.2895 0.408609 15.1237 0.41032C14.9585 0.409582 14.7975 0.461766 14.6642 0.559222C14.5308 0.656678 14.4322 0.794281 14.3828 0.951858L12.4959 6.76023H6.54273L4.65299 0.950918C4.6034 0.793516 4.50473 0.65612 4.37142 0.558844C4.23811 0.461568 4.07716 0.40952 3.91213 0.41032H3.90649C3.74078 0.410396 3.57929 0.462661 3.44496 0.559699C3.31062 0.656737 3.21026 0.793619 3.15812 0.950918L1.17718 7.06579L1.1753 7.07143L1.17624 7.06673L0.171194 10.1505C0.0970971 10.3767 0.0967781 10.6207 0.170283 10.8471C0.243788 11.0735 0.387318 11.2707 0.580169 11.4103L9.25701 17.7142L9.26077 17.717L9.26359 17.7179L9.26453 17.7189C9.27812 17.7284 9.29225 17.7372 9.30684 17.7452L9.31248 17.749L9.31624 17.7508L9.31906 17.7518H9.32094L9.32564 17.7546L9.34914 17.764L9.37077 17.7734H9.37171L9.37547 17.7753L9.38017 17.7772H9.38205L9.38769 17.779H9.39051C9.40085 17.7828 9.4112 17.7847 9.42248 17.7875L9.4347 17.7903H9.43658L9.44128 17.7922L9.44786 17.7931H9.45444C9.47497 17.7965 9.4957 17.7984 9.51649 17.7988H9.51744C9.53852 17.7987 9.55957 17.7972 9.58043 17.7941H9.58701L9.59359 17.7922L9.59735 17.7913H9.59923L9.61239 17.7875L9.64436 17.78H9.64624L9.65188 17.7772H9.65376L9.65846 17.7753L9.66222 17.7743L9.68667 17.764L9.70829 17.7546L9.71299 17.7527H9.71487L9.71769 17.7508L9.72145 17.749L9.72803 17.7452C9.74228 17.7375 9.75609 17.729 9.7694 17.7198L9.77316 17.717L9.77786 17.7142L18.4556 11.4094C18.6481 11.2697 18.7914 11.0726 18.8647 10.8464C18.938 10.6202 18.9376 10.3765 18.8637 10.1505H18.8646ZM15.1293 1.51972L16.831 6.76023H13.4276L15.1293 1.51972ZM3.90649 1.51972L5.61102 6.76117H2.2076L3.90649 1.51972ZM1.10102 10.693C1.06019 10.6631 1.02983 10.6212 1.0143 10.573C0.998761 10.5249 0.998842 10.4731 1.01453 10.425L1.76102 8.13288L7.2347 15.1503L1.10102 10.693ZM2.50564 7.64682H5.89966L8.31872 15.0996L2.50564 7.64682ZM9.24196 17.7029L9.23632 17.6982L9.22598 17.6888L9.20718 17.6719L9.20906 17.6728L9.21094 17.6747C9.22371 17.6871 9.23721 17.6987 9.25137 17.7095L9.25325 17.7113L9.24196 17.7029ZM9.51744 15.9222L8.09402 11.5363L6.83043 7.64588H12.2082L9.51744 15.9222ZM9.80889 17.6897L9.79949 17.6972L9.79761 17.6982L9.79291 17.7029L9.78162 17.7113L9.7835 17.7095C9.79766 17.699 9.81116 17.6877 9.82393 17.6756L9.82487 17.6737L9.82675 17.6719L9.80889 17.6897ZM13.1399 7.64494H16.5339L15.8382 8.53528L10.7171 15.0977L13.1399 7.64494ZM17.9348 10.692L11.8021 15.1484L17.2776 8.13194L18.0213 10.4231C18.0372 10.4713 18.0374 10.5234 18.0218 10.5717C18.0063 10.62 17.9758 10.6621 17.9348 10.692Z" fill="#EEBEBE"/>
    </svg>
  )
}

export default GitlabIcon
