import { NextResponse } from 'next/server';
import { Task } from '@prisma/client';
import prismadb from '../../../../lib/prismadb';

export async function GET(req: Request) {
  try {
    const tasks: Task[] = await prismadb.task.findMany();
    return NextResponse.json({ tasks });
  } catch (err) {
    throw err;
  }
}

export async function POST(request: Request) {
  const { name }: Partial<Task> = await request.json();
  if (name) {
    try {
      const task: Task = await prismadb.task.create({
        data: {
          name,
        },
      });

      return NextResponse.json({ task });
    } catch (err) {
      throw err;
    }
  }
}

export async function PUT(request: Request) {
  const { id }: Partial<Task> = await request.json();
  if (id) {
    try {
      const task: Task = await prismadb.task.update({
        data: {
          status: 'COMPLETED',
        },
        where: {
          id,
        },
      });

      return NextResponse.json({ task });
    } catch (err) {
      throw err;
    }
  }
}

export async function DELETE(request: Request) {
  const { id }: Partial<Task> = await request.json();
  if (id) {
    try {
      const task: Task = await prismadb.task.delete({
        where: {
          id,
        },
      });

      return NextResponse.json({ task });
    } catch (err) {
      throw err;
    }
  }
}
