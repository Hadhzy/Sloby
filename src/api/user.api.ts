// Represents a user in the db
import { Session, SupabaseClient } from '@supabase/supabase-js';

export class ApiUser {
  public readonly session: Session | null;
  public readonly user: Session['user'] | null;

  constructor(session: Session | null) {
    this.session = session;
    this.user = session?.user ?? null;
  } 

  // anything related to user will go here..

  //sign in
  public static signIn(supabase: SupabaseClient) {
    // supabase.auth.si
  }

  //sign out
  public static async signOut(supabase: SupabaseClient) {
    return supabase.auth.signOut();
    //TODO:  routing will also happen here
  }
}
