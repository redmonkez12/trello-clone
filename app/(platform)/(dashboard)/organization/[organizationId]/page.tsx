import { db } from "@/lib/db";
import { create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";

export default async function Page() {
    const boards = await db.board.findMany();

    return (
        <div className={"flex flex-col space-y-4"}>
            <form action={create}>
                <input
                    id="title"
                    name="title"
                    required
                    placeholder={"Enter a bord title"}
                    className={"border-black border p-1"}
                />

                <Button type={"submit"}>Submit</Button>
            </form>
            <div className={"space-y-2"}>
                {boards.map((board) => (
                    <div key={board.id}>
                        Board Title: {board.title}
                    </div>
                ))}
            </div>
        </div>
    );
}