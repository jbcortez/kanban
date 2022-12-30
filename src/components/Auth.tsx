import React, { useEffect, useState } from "react";
import { supabase } from "../supabase";
import { Session } from "@supabase/supabase-js";
import { Box, Button, Input } from "@chakra-ui/react";

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOtp({ email });
      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error) {
      if (error instanceof Error) console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Input value={email} onChange={(e) => setEmail(e.target.value)} />
      <Button onClick={handleLogin}>Login</Button>
    </Box>
  );
}
