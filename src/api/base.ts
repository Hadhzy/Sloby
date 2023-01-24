import { SupabaseClient } from "@supabase/supabase-js";

export abstract class BaseServices {
    protected client: SupabaseClient;
    public readonly tableName: string;

    constructor(client: SupabaseClient, tableName: string) {
        this.client = client;
        this.tableName = tableName;
    }
}