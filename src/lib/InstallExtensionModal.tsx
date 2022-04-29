import { createElement as CurtomCreateElement } from './CustomCreateElement'
import { IQRCodeModal } from '@deficonnect/types'
import { formatIOSMobile, isAndroid, isIOS, saveMobileLinkInfo } from '@deficonnect/browser-utils'
import DeFiLinkIconLight from './assets/defi-link-icon-light'
import ConnectStepCameraIcon from './assets/connect-step-camera-icon'
import LogoIcon from './assets/defi-link-icon'
import FeatureGlobeIcon from './assets/feature-globe-icon'
import FeatureLinkIcon from './assets/feature-link-icon'
import FeatureLockIcon from './assets/feature-lock-icon'
import { formatToCWEURI, replaceUriProtocol } from './tools/url-tools'
import QRCode from 'qrcode'
import { styles, BannerStyles } from './InstallExtensionModal.styles'

const iOSRegistryEntry = {
  name: 'Crypto.com DeFi Wallet',
  shortName: 'DeFi Wallet',
  color: 'rgb(17, 153, 250)',
  logo: './logos/wallet-crypto-defi.png',
  universalLink: 'https://wallet.crypto.com',
  deepLink: 'cryptowallet:',
}

const openDeeplinkOrInstall = (deepLink: string, installURL: string): void => {
  if (isIOS()) {
    // window.open(deepLink)
  } else {
    // let isBlur = false
    // window.addEventListener('blur', () => {
    //   isBlur = true
    // })
    // window.addEventListener('visibilitychange', () => {
    //   if (document.hidden) {
    //     isBlur = true
    //   }
    // })
    // window.location.href = deepLink
    // setTimeout(() => {
    //   if (isBlur) return
    //   window.open(installURL)
    // }, 1500)
  }
}

// const downloadAppURL = 'https://bit.ly/3Bk4wzE'
export const InstallExtensionQRCodeModal: IQRCodeModal = {
  open: async function (uri: string, cb: Function, opts) {
    const CWEURI = formatToCWEURI(uri) + '&role=dapp'
    if (isIOS()) {
      const singleLinkHref = formatIOSMobile(CWEURI, iOSRegistryEntry)
      // saveMobileLinkInfo({ name: 'Crypto.com DeFi Wallet', href: singleLinkHref })
      // openDeeplinkOrInstall(singleLinkHref, downloadAppURL)
      return
    }
    if (isAndroid()) {
      const lowercaseURI = replaceUriProtocol(CWEURI, 'cwe') + '&role=dapp'
      // saveMobileLinkInfo({
      //   name: 'Unknown',
      //   href: lowercaseURI, // adnroid side only support lowercase
      // })
      // openDeeplinkOrInstall(lowercaseURI, downloadAppURL)
      return
    }

    // const body = document.body
    // const popup = document.createElement('div')
    // popup.id = 'cryptoconnect-extension'
  },
  close: function () {
    window.dispatchEvent(new Event('InstallExtensionQRCodeModal_Event_close'))
  },
}

interface InstallExtensionModalProps {
  qrUrl: string
}
export const InstallExtensionModal = (props: InstallExtensionModalProps): JSX.Element => {
  const { qrUrl } = props
  const onInstallButtonClick = (): void => {
    // window.open('https://wallet.crypto.com/api/v1/extension/install')
  }
  const onTermsClick = (): void => {
    // window.open('https://crypto.com/document/ncw_tnc')
  }
  const onPrivacyClick = (): void => {
    // window.open('https://crypto.com/privacy/ncw')
  }
  const onDownloadClick = (): void => {
    // window.open('https://bit.ly/3Bk4wzE')
  }
  const stopPropagation = (event: { stopPropagation: () => void }): void => event?.stopPropagation()
  return (
    <div>
    </div>
  )
}

interface DownloadAppBannerProps {
  onDownloadClick: () => void
}
const DownloadAppBanner = (props: DownloadAppBannerProps): JSX.Element => {
  const { onDownloadClick } = props
  return (
    <div>
    </div>
  )
}
