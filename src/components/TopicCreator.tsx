"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useMutation } from "@tanstack/react-query";
import { createTopic } from "@/app/actions";

const TopicCreator = () => {
  const [input, setInput] = useState<string>("");
  const [inputError, setInputError] = useState<string | null>(null); // Define type explicitly
  const [btn, setBtn] = useState(true);

  const { mutate, error, isPending } = useMutation({
    mutationFn: createTopic,
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Add type annotation for the event parameter
    const inputValue = e.target.value;
    if (checkInput(inputValue)) {
      setInput(inputValue);
      setInputError(null); // Clear inputError when input is valid
      setBtn(false);
    } else {
      setBtn(true);
    }
  };
  

  const handleTopic = () => {
    if (checkInput(input)) {
      setBtn(() => false);
      mutate({ topicName: input });
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleTopic();
    }
  };

  const checkInput = (input: string) => {
    if (input) {
      const regex = /^[a-zA-Z-]+$/;
      const res = regex.test(input);
      if (res) {
        return true;
      } else {
        setInputError(
          "Topic name can only contain alphabets with or without hyphens" 
        );
        return false;
      }
    } else {
      setInputError("Please enter something");
      setBtn(() => false);
      return false;
    }
  };

  return (
    <div className="flex flex-col mt-12 gap-2">
      <div className="flex gap-2">
        <div className="flex flex-col">
          <Input
            placeholder="Enter the topic here..."
            className="bg-white min-w-64"
            onChange={handleInput}
            onKeyDown={handleKeyPress}
          />
          {inputError && (
            <div className="text-red-500 text-xs">{inputError}</div>
          )}
        </div>
        <Button disabled={btn || isPending} onClick={handleTopic}>
          Create
        </Button>
      </div>
      {error?.message && <p>{error.message}</p>}
    </div>
  );
};

export default TopicCreator;
