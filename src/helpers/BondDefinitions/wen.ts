import { NetworkID, CustomBond, BondType } from "src/lib/Bond";
import { ReactComponent as wenImg } from "src/assets/tokens/WEN.svg";
import { abi as AbsorptionBondContract } from "src/abi/bonds/AbsorptionBondContract.json";
import { abi as ierc20Abi } from "src/abi/IERC20.json";
import { bondedQuantity } from "./customTreasuryBalance";

const wen = new CustomBond({
  name: "wen",
  displayName: "WEN",
  lpUrl: "",
  bondType: BondType.StableAsset,
  bondToken: "WEN",
  isAvailable: { [NetworkID.Mainnet]: true },
  bondIconSvg: wenImg,
  bondContractABI: AbsorptionBondContract,
  isAbsorption: true,
  inputDecimals: "gwei", // WEN is 9 decimals
  outputDecimals: "ether", // wsEXOD is 18 decimals
  reserveContract: ierc20Abi, // The Standard ierc20Abi since they're normal tokens
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0xd245e3ddf9d339f91e3824e0f167654d0587c8a5", // TODO: @HOVOH CHANGE TO REAL CONTRACT
      reserveAddress: "0x86d7bccb91b1c5a01a7ad7d7d0efc7106928c7f8",
    },
    [NetworkID.Testnet]: {
      bondAddress: "",
      reserveAddress: "",
    },
  },
  customTreasuryBalanceFunc: bondedQuantity,
});

export default wen;
