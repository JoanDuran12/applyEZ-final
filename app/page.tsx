'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import { Button, VStack, Heading, Input, Box, FormControl, FormLabel, Text, useToast } from '@chakra-ui/react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const toast = useToast();

  const handleLogin = () => {
    setIsLoading(true);

    // Here, you'd usually verify login credentials (e.g., with an API call).
    // For now, let's assume login is successful after 2 seconds.
    setTimeout(() => {
      console.log('Login successful');
      toast({
        title: 'Login successful!',
        description: 'Redirecting to your dashboard...',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });

      // After successful login, navigate to the dashboard
      router.push('/dashboard');
    }, 2000);
  };

  return (
    <Box minH="100vh" bg="gray.50" display="flex" justifyContent="center" alignItems="center" borderRadius="30px">
      <Box 
        bg="white" 
        p={8} 
        rounded="lg" 
        shadow="lg" 
        w={{ base: "90%", md: "400px" }} 
        maxW="md"
        color="black"
        margin="20px"
      >
        <VStack spacing={6} align="stretch">
          <Heading as="h2" size="lg" color="teal.500" textAlign="center">
            Welcome Back!
          </Heading>
          <Text color="gray.600" textAlign="center">
            Please enter your credentials to log in
          </Text>

          <FormControl id="email" isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input 
              type="email" 
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              focusBorderColor="teal.500"
              color="black"
            />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input 
              type="password" 
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              focusBorderColor="teal.500"
              color="black"

            />
          </FormControl>

          <Button 
            colorScheme="teal" 
            size="lg" 
            w="full"
            isLoading={isLoading}
            onClick={handleLogin}
          >
            Log In
          </Button>

          <Text textAlign="center" color="gray.500">
            Don’t have an account? <Text as="span" color="teal.500" cursor="pointer">Sign up</Text>
          </Text>
        </VStack>
      </Box>
    </Box>
  );
}
