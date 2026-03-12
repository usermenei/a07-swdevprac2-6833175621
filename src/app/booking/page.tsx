"use client"
import { useState } from "react";
import { TextField, Select, MenuItem, Button, FormControl, InputLabel } from "@mui/material";
import DateReserve from "@/components/DateReserve";
import { Dayjs } from "dayjs";

export default function Booking() {
    const [reserveDate, setReserveDate] = useState<Dayjs | null>(null);

    const handleSubmit = () => {
        console.log("Booking submitted", reserveDate);
    };

    return (
        <main className="flex flex-col items-center p-10">
            <div className="text-3xl font-bold mb-8">Venue Booking</div>

            <form className="flex flex-col gap-6 w-full max-w-md bg-white p-8 rounded-lg shadow-md">

                {/* Name */}
                <TextField
                    variant="standard"
                    name="Name-Lastname"
                    label="Name-Lastname"
                />

                {/* Contact */}
                <TextField
                    variant="standard"
                    name="Contact-Number"
                    label="Contact-Number"
                />

                {/* Venue Select */}
                <FormControl variant="standard">
                    <InputLabel id="venue-label">Venue</InputLabel>
                    <Select
                        labelId="venue-label"
                        id="venue"
                        name="venue"
                    >
                        <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                        <MenuItem value="Spark">Spark Space</MenuItem>
                        <MenuItem value="GrandTable">The Grand Table</MenuItem>
                    </Select>
                </FormControl>

                {/* Date Picker */}
                <DateReserve onDateChange={(value) => setReserveDate(value)} />

                {/* Submit Button */}
                <Button
                    variant="contained"
                    name="Book Venue"
                    onClick={handleSubmit}
                    className="mt-4"
                >
                    Book Venue
                </Button>

            </form>
        </main>
    );
}