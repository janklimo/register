import { Trans } from '@lingui/macro'
import { useAtomValue } from 'jotai'
import { rTokenAtom } from 'state/atoms'
import { Box, BoxProps, Link, Text } from 'theme-ui'

// TODO: Pull this info from listing
const About = (props: BoxProps) => {
  const rToken = useAtomValue(rTokenAtom)

  if (rToken?.isRSV) {
    return (
      <Box {...props}>
        <Text variant="title" mb={3}>
          <Trans>About</Trans>
        </Text>
        <Text variant="legend" as="p">
          <Trans>
            RSV is backed by a basket of on-chain collateral assets, held by the
            Reserve Vault smart contract. This basket is currently compromised
            of entirely USDC — so each RSV is initially redeemable with the
            Reserve smart contracts for 1 USDC. Since each RSV token is
            redeemable directly for this basket, value of the RSV token is
            economically linked to the value of the basket. This anchors RSV at
            $1.00, as each of the current collateral tokens is redeemable for
            USD 1:1.
          </Trans>{' '}
        </Text>
        <Link
          href="https://medium.com/reserve-currency/preparing-to-exclude-busd-from-rsvs-backing-4af7e575dcfb"
          target="_blank"
          sx={{ textDecoration: 'underline' }}
        >
          <Trans>Read more here on most recent backing change.</Trans>
        </Link>
        <Text variant="legend" as="p" mt={3}>
          <Trans>
            RSV is not integrated with the Reserve protocol at this time and is
            a separate discrete set of smart contracts.
          </Trans>{' '}
          <Link
            href="https://reserve.org/protocol/how_rsv_works/index.html"
            target="_blank"
            sx={{ textDecoration: 'underline' }}
          >
            Learn more here.
          </Link>
        </Text>
      </Box>
    )
  }

  return (
    <Box {...props}>
      {rToken?.mandate && (
        <>
          <Text mb={3} variant="pageTitle">
            {rToken?.symbol} <Trans>Mandate</Trans>
          </Text>
          <Text as="p" variant="legend">
            {rToken?.mandate}
          </Text>
        </>
      )}
      {rToken?.meta?.about && (
        <>
          <Text mt={4} mb={3} variant="title">
            <Trans>About</Trans>
          </Text>
          <Text as="p" variant="legend">
            {rToken?.meta?.about}
          </Text>
        </>
      )}
      {!rToken?.meta?.about && !rToken?.mandate && (
        <>
          <Text mb={3} variant="title">
            <Trans>About</Trans>
          </Text>
          <Text as="p" variant="legend">
            <Trans>There is no information about this token.</Trans>
          </Text>
        </>
      )}
    </Box>
  )
}

export default About
