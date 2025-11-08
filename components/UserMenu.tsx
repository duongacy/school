"use client";

import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Button,
  HStack,
  Text,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/navigation';

export default function UserMenu() {
  const router = useRouter();

  async function signOut() {
    try {
      // Try a server-side signout endpoint if present
      await fetch('/api/auth/signout', { method: 'POST' });
    } catch {
      // ignore errors — endpoint may not exist in this scaffold
    }
    // Clear any client-side tokens (placeholder)
    try {
      localStorage.removeItem('auth_token');
    } catch {
      // ignore
    }
    // Redirect to home (or login page)
    router.push('/');
  }

  return (
    <Menu>
      <MenuButton as={Button} variant="ghost" size="sm" px={2}>
        <HStack spacing={2} alignItems="center">
          <Avatar size="sm" name="Nguyen Van A" />
          <Text display={{ base: 'none', md: 'block' }} fontSize="sm">
            Nguyễn Văn A
          </Text>
          <ChevronDownIcon />
        </HStack>
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => router.push('/profile')}>Hồ sơ</MenuItem>
        <MenuItem onClick={() => router.push('/profile/settings')}>Cài đặt</MenuItem>
        <MenuItem onClick={signOut}>Đăng xuất</MenuItem>
      </MenuList>
    </Menu>
  );
}
