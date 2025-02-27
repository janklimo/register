import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { Box, BoxProps, Text } from 'theme-ui'
import { navigationIndexAtom } from './atoms'

const Container = styled(Box)`
  height: fit-content;
  margin-bottom: 32px;
`

interface Props extends BoxProps {
  title?: string
  sections: string[]
  initialIndex?: number
}

const Navigation = ({ title, sections, initialIndex = 0, ...props }: Props) => {
  const [current, setNavigationIndex] = useAtom(navigationIndexAtom)

  useEffect(() => {
    return () => {
      setNavigationIndex([])
    }
  }, [])

  const handleNavigate = (index: number) => {
    document
      .getElementById(`section-${index}`)
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  const active = Math.min(...current)

  return (
    <Container {...props}>
      {!!title && (
        <Text variant="title" mb={4}>
          {title}
        </Text>
      )}
      <Box
        as="ul"
        p={0}
        sx={{
          listStyle: 'none',
          borderLeft: '1px dashed',
          borderColor: 'inputBorder',
        }}
      >
        {sections.map((item, index) => {
          const currentIndex = index + initialIndex
          const isActive = active === currentIndex

          return (
            <Box
              key={item}
              onClick={() => !isActive && handleNavigate(currentIndex)}
              as="li"
              mt={!!index ? 4 : 0}
              sx={{
                lineHeight: '16px',
                borderLeft: isActive ? '3px solid' : 'none',
                borderColor: 'text',
                paddingLeft: isActive ? '13px' : '16px',
                cursor: 'pointer',
              }}
            >
              <Text variant={isActive ? 'primary' : 'legend'}>{item}</Text>
            </Box>
          )
        })}
      </Box>
    </Container>
  )
}

export default Navigation
