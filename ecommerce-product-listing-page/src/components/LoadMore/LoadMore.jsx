import { Button, Flex } from '@chakra-ui/react'

// eslint-disable-next-line react/prop-types
const LoadMore = ({loadMoreHandler, loadMoreDisabled}) => {
  return (
    <Flex justifyContent='center' margin='2rem'>
        <Button isDisabled={loadMoreDisabled} onClick={() => loadMoreHandler()}>Load More</Button>
    </Flex>
  )
}

export default LoadMore