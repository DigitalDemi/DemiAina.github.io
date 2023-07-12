---
layout: "../../layouts/BlogLayout.astro"
title: Stack
author: Demi Aina
date: 2023-03-03
image : {
    src : "/stack.png",
    alt : Hello world,

}
description: This a blog talking about how stacks are made and how to code one
draft : true
tags :
- Data Structure
- Algorithms
- C
Categories :
- Programming

---
<style>
    h1 {
        font-size: 3rem;
        padding-bottem: 1rem ;
    }
    p {
        margin : 1rem 0 1rem 0;
    }
    h2 {
        font-size: 1.5rem;
        margin : 1rem 0 1rem 0;
        padding-bottem: 2rem ;
    }
    .astro-code {
        margin : 2rem 0 2rem 0;
        padding : 1rem 1rem 1rem 1rem;
    }
    h1.m-2 {
        font-size: 0rem;
        padding-bottem: 0rem ;
    }
    h2.m-2  {
        font-size: 0rem;
        padding-bottem: 0rem ;
    }
    a {
        font-size: 1rem;
    }
    </style>

# Introduction
A stack is a unique data structure that using define a set of rules to hold data. This rule is called the last in first out. This means whatever data has been put into this data structure will follow in principle. This means when the data is added to the stack, the last data item is the last one to come in, however, the first one to come out.<br>

P. S Some links are broken as I have not made articles for those yet.

## Example
To visualize this, you can use a stack of plates, if you follow this principle the plate at the top is the first one to get removed from the stack. When a new plate needs to be added, it will be added at the top of the stack.

## Code
When you consider this way, coding the stack should be relatively easy to code.  However, depending on the language, you may need to use pointers.

I will show you how to code it in 3 different languages C, Java (Using it this semester), JavaScript because it has some built-in parameters and Python because everyone uses python

### Requirements
The stack can be coded in two different ways *arrays* and *linked list*, arrays are fixed in size and linked lists allow for the limitation to be the amount of memory the computer has.

Linked lists can sometimes be more efficient, as generally it only uses the amount of memory that is needed at the moment in time. While arrays once you have declared the size of the array that is the size you can fill it up to size.  If you require more space, you need to find a new fixed size of memory and copy all the items you have in that array into the new array.

Ok, so the main conventions used for the stack are push and pop.

Push, adds an item onto the stack.
Pop removes the data at the top of the stack.

This means data should not be taken at the end of the middle.

C – Linked List

```c
typedef struct Node
{
    int data;
    struct Node *next;

}Node;
```

If you consider this struct has fields it  makes it easier to understand like 4 | X01 and then points to the next node the \*\next pointer 4 | X01 -> 5 | X02

Now that our node structure is made, we now need to create the methods to make it stack.

For this we are going to need to use *double pointer* to reference the head pointer in main, this will track what's at the top of the stack.

```c
Node *head = null;
```

After this, we now need to consider the methods which are going to print(), push() pop()

```c
Void print(*head);
void push(int, *head);
int pop();
```

These are the function parameters.

# Printing
A guard is needed, this is because in C sometimes accessing Null can make your program crash, and it is generally good practice to check anyway.

```c
void print(Node* *head){

if(*head == null){
        printf("Stack is empty");
        return;
}
Node *current = **head
while(current != null){
        printf("%d -> ");
        current = current -> current.next;
}
printf("end");
}
```
Guards are a design choice by me that allows me to stop using else in some circumstances.

While the loop will print all the values in the stack one by one

### Pushing an item onto the stack

To push an item onto the stack, we require to take in the item and put it to the head. However, because we need to ensure the list doesn't get lost, we have to make sure we move around the pointer properly or else our program will crash.

This is how you create a new node using Malloc.

```c
   Node *current = malloc(sizeof(Node));
```

To do this, we need to check for 2 conditions check of the top of the stack.

We need to check if there are items in the stack, if there aren't any then add it to the top of the stack.

Then all we do is take the newly created node, put the user data into the data section and make the next pointer that points to the next node Null because it is the start of the list.

```c
if (head == NULL)
    {
        current->data = data;
        current->next = NULL;
        *head = current;
        print(head);
    }
```


In the second condition, we check if the memory has been allocated for the new node we want to add we then put the user data into the data section and make the current node at the top of the stack and put it into the new node next pointer section and then make the new node the new top of the stack.

```c
 else if (current != NULL)
    {
        current->data = data;
        current->next = *head;
        *head = current;
        print(head);
    }

```
And for the last condition, we need to check if the memory was created for the current node. If the memory was not created, then it will prompt the user that it has not been created.

```c
 else{

        printf("%d no memory avabile for it");

    }
```

### Removing an item from the stack

Some content is needed for the pop function, this is because some error handling has been handled in the user option part. It auto-checks if the head is set to null. The reason I have done it this way is to return the popped value, so the user can see it.

So will show that code first

#### User option
```c
  if (Head == NULL)

   {

    printf(" Stack is empty");

    break;

    }

  printf("\n Popped data: %d\n",pop(&Head));

  print(&Head);
```

And as you can see there is a guard if statement that will break out of the switch statement when the Head pointer is empty.

#### Pop function
```c
int pop(Node **head)
{
    Node *current = *head;
    int value = 0;
    value = (*head)->data;
    *head = current->next;
    free(current);
    return value;
}
```
We have a variable called value in this function, this is going to return the number that has been popped to the user. As you can see we are returning the node head data. To set the head as the node next to it, we set the head to be the head's next value (we used current here).
The reason we use current here is that we need to free the memory of this node, calling the node temp would probably be a better idea here if it is modified.


```c
int pop(Node **head)
{
    Node *temp = *head;
    int value = 0;
    value = (*head)->data;
    *head = temp->next;
    free(temp);
    return value;
}
```
If we don't free the memory of the node, it will cause a program leak and take system memory up the longer the program is running

I used a switch statement to run the commands and users could choose the option.

```c
 while (1)
    {

        printf(" \n 1. Push \t 2. Pop \t 3. Print \t 4. Exit \n");
        printf("\n Enter your choice: ");
        scanf("%d", &choice);
        int data = 0;
        switch (choice)
        {
        case 1:
            printf(" Enter data: ");
            scanf("%d", &data);
            push(&Head, data);
            break;
        case 2:
            if (Head == NULL)
            {
                printf(" Stack is empty");
                break;
            }
            printf("\n Popped data: %d\n", pop(&Head));
            print(&Head);
            break;
        case 3:
            print(&Head);
            break;
        case 4:
            return 0;
        default:
            printf(" Invalid choice");
        }
    }
}
```

While 1 causes the menu to constantly display and the case runs each function.


Thank you for reading, I hope it blog helped to understand how linked list work and how to code them.

This GitHub link has the data structures and algorithms that I will update as I make articles, you can follow it if you want
