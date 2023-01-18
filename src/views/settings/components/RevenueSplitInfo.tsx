import { InfoHeading } from 'components/info-box'
import { useAtomValue } from 'jotai'
import { rTokenRevenueSplitAtom } from 'state/atoms'
import { BoxProps, Card, Text, Divider } from 'theme-ui'
import { shortenAddress } from 'utils'

const RevenueSplitInfo = (props: BoxProps) => {
  const distribution = useAtomValue(rTokenRevenueSplitAtom)

  return (
    <Card p={4} {...props}>
      <Text variant="sectionTitle">Revenue Distribution</Text>
      <Divider my={4} mx={-4} sx={{ borderColor: 'darkBorder' }} />

      <InfoHeading
        title="Holders"
        subtitle={`${distribution.holders}%`}
        mb={3}
      />
      <InfoHeading
        title="Stakers"
        subtitle={`${distribution.stakers}%`}
        mb={3}
      />
      {distribution.external.map((dist) => (
        <InfoHeading
          key={dist.address}
          title={shortenAddress(dist.address)}
          subtitle={`${dist.total}%`}
          mb={3}
        />
      ))}
    </Card>
  )
}

export default RevenueSplitInfo
