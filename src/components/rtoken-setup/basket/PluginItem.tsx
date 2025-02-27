import { Trans } from '@lingui/macro'
import GoTo from 'components/button/GoTo'
import TokenLogo from 'components/icons/TokenLogo'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'react-feather'
import {
  Box,
  BoxProps,
  Checkbox,
  Divider,
  Flex,
  IconButton,
  Link,
  Text,
} from 'theme-ui'
import { CollateralPlugin } from 'types'
import { ExplorerDataType, getExplorerLink } from 'utils/getExplorerLink'
import { Collateral } from '../atoms'

interface PluginItemProps extends BoxProps {
  data: CollateralPlugin | Collateral
  selected?: boolean
  onCheck(address: string): void
}

const PluginInfo = ({ data }: { data: CollateralPlugin }) => (
  <>
    <Divider mt={2} />
    <Flex variant="layout.verticalAlign" ml={0} mt={3} sx={{ fontSize: 1 }}>
      <Box mr={4}>
        <Text variant="legend">
          <Trans>Reference unit</Trans>
        </Text>
        <Text sx={{ display: 'block' }}>{data.referenceUnit}</Text>
      </Box>
      <Box mr={4}>
        <Text variant="legend">
          <Trans>Collateral token</Trans>
        </Text>
        <Link
          as="a"
          href={getExplorerLink(
            data.collateralAddress!,
            ExplorerDataType.TOKEN
          )}
          target="_blank"
          variant="legend"
          sx={{ color: 'text', display: 'block' }}
        >
          {data.collateralToken}
        </Link>
      </Box>
      <Box>
        <Text variant="legend">
          <Trans>Decimals</Trans>
        </Text>
        <Text sx={{ display: 'block' }}>{data.decimals}</Text>
      </Box>
    </Flex>
  </>
)

/**
 * View: Deploy -> Basket setup -> CollateralModal
 * Display collateral plugin item
 */
const PluginItem = ({ data, onCheck, selected, ...props }: PluginItemProps) => {
  const [isVisible, setVisible] = useState(false)

  return (
    <Box {...props}>
      <Flex variant="layout.verticalAlign">
        <TokenLogo size={20} symbol={data.symbol} />
        <Box ml={3}>
          <Box variant="layout.verticalAlign">
            <Text>{data.symbol} plugin</Text>
            <GoTo
              ml={1}
              href={getExplorerLink(data.address, ExplorerDataType.ADDRESS)}
            />
          </Box>

          <Text sx={{ fontSize: 1, display: 'block' }} variant="legend">
            <Trans>Target:</Trans> {data.targetUnit}{' '}
            {!!data.custom && (
              <>
                | <Trans>Custom</Trans>
              </>
            )}
          </Text>
        </Box>
        <Box mx="auto" />
        <label>
          <Checkbox
            sx={{ cursor: 'pointer' }}
            defaultChecked={!!selected}
            onChange={() => {
              onCheck(data.address)
            }}
          />
        </label>
        <IconButton
          sx={{ cursor: 'pointer' }}
          ml={-1}
          onClick={() => setVisible(!isVisible)}
        >
          {isVisible ? (
            <ChevronUp color="#999999" />
          ) : (
            <ChevronDown color="#999999" />
          )}
        </IconButton>
      </Flex>
      {isVisible && <PluginInfo data={data as CollateralPlugin} />}
    </Box>
  )
}

export default PluginItem
