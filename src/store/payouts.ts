import { defineStore } from "pinia"

export const usePayoutStore = defineStore("payouts", () => {
    const payouts = [
        {
            companyName: "Open SI SAS ",
            companyOwnerName:"Kounou Giles",
            companyIfu: "23WE 32323",
            companyEmail: "opensico@yopmail.com"
        },
        {
            companyName: "Ecobank",
            companyOwnerName:"Marc Tchepko",
            companyIfu: "27XE 37823",
            companyEmail: " ecobak@yopmail.com"
        },
    ];

    var current: string | null = null

    function setCurrent(item: string) {
        current = item;
    }

    return { payouts, current, setCurrent };

});
