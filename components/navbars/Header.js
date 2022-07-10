import { Center, Flex, Text, Button,FormControl,FormLabel,Input } from "@chakra-ui/react"
import { useState } from "react";
import { useMoralis } from "react-moralis";

export default function Header({user, logout, isLoggingOut}){
    const [input, setInput] = useState('')
    const {setUserData, isUserUpdating} = useMoralis()
    return(
    <header>
        <Flex px="10" py="6" justifyContent="space-between" bg="blackAlpha.800" color="white">
            <Center>
                <Text fontSize="xl" fontWeight="bold">
                    Tauros Dashboard:
                </Text>
            </Center>
            <Center>
                <Text>
                    {user.getUsername()}
                </Text>
                    <Button ml="4" colorScheme="blackAlpha" onClick={logout} disable={isLoggingOut}>
                        Logout
                    </Button>
            </Center>
        </Flex>
        <Text><b>🔥&nbsp; Username:</b> {user.getUsername()}</Text>
            <Text><b>💵&nbsp; Wallet Address:</b> {user.get('ethAddress')}</Text>
            <form onSubmit={e=>{
                e.preventDefault()
                if(input.trim() !== '') {
                    setUserData({
                        username: input
                    }).then(()=>setInput(''))
                }
            }}>
                <FormControl mt="6" mb="6">
                    <FormLabel htmlFor="username">
                        Set a new Username
                    </FormLabel>
                    <Input id="username" type="text" placeholder="Zombie **" value={input} onChange={e => setInput(e.target.value)} />
                </FormControl>
                <Button type="submit" colorScheme="purple" disabled={isUserUpdating}>
                ☑️&nbsp; Change Username
                </Button>
            </form>
    </header>
    )
}