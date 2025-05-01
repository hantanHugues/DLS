export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      communities: {
        Row: {
          banner_url: string | null
          created_at: string | null
          created_by: string
          description: string | null
          game: string
          id: string
          logo_url: string | null
          name: string
          updated_at: string | null
        }
        Insert: {
          banner_url?: string | null
          created_at?: string | null
          created_by: string
          description?: string | null
          game: string
          id?: string
          logo_url?: string | null
          name: string
          updated_at?: string | null
        }
        Update: {
          banner_url?: string | null
          created_at?: string | null
          created_by?: string
          description?: string | null
          game?: string
          id?: string
          logo_url?: string | null
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      community_members: {
        Row: {
          community_id: string
          id: string
          joined_at: string | null
          role: string
          user_id: string
        }
        Insert: {
          community_id: string
          id?: string
          joined_at?: string | null
          role?: string
          user_id: string
        }
        Update: {
          community_id?: string
          id?: string
          joined_at?: string | null
          role?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "community_members_community_id_fkey"
            columns: ["community_id"]
            isOneToOne: false
            referencedRelation: "communities"
            referencedColumns: ["id"]
          },
        ]
      }
      match_disputes: {
        Row: {
          created_at: string | null
          created_by: string
          description: string | null
          id: string
          match_id: string
          reason: string
          resolution: string | null
          resolved_at: string | null
          resolved_by: string | null
          status: string
        }
        Insert: {
          created_at?: string | null
          created_by: string
          description?: string | null
          id?: string
          match_id: string
          reason: string
          resolution?: string | null
          resolved_at?: string | null
          resolved_by?: string | null
          status?: string
        }
        Update: {
          created_at?: string | null
          created_by?: string
          description?: string | null
          id?: string
          match_id?: string
          reason?: string
          resolution?: string | null
          resolved_at?: string | null
          resolved_by?: string | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "match_disputes_match_id_fkey"
            columns: ["match_id"]
            isOneToOne: false
            referencedRelation: "matches"
            referencedColumns: ["id"]
          },
        ]
      }
      match_proofs: {
        Row: {
          created_at: string | null
          id: string
          match_id: string
          proof_url: string
          submitted_by: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          match_id: string
          proof_url: string
          submitted_by: string
        }
        Update: {
          created_at?: string | null
          id?: string
          match_id?: string
          proof_url?: string
          submitted_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "match_proofs_match_id_fkey"
            columns: ["match_id"]
            isOneToOne: false
            referencedRelation: "matches"
            referencedColumns: ["id"]
          },
        ]
      }
      matches: {
        Row: {
          created_at: string | null
          id: string
          match_code: string | null
          played_date: string | null
          player1_id: string | null
          player2_id: string | null
          round: string
          scheduled_date: string | null
          score1: number | null
          score2: number | null
          status: string
          tournament_id: string
          updated_at: string | null
          winner_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          match_code?: string | null
          played_date?: string | null
          player1_id?: string | null
          player2_id?: string | null
          round: string
          scheduled_date?: string | null
          score1?: number | null
          score2?: number | null
          status?: string
          tournament_id: string
          updated_at?: string | null
          winner_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          match_code?: string | null
          played_date?: string | null
          player1_id?: string | null
          player2_id?: string | null
          round?: string
          scheduled_date?: string | null
          score1?: number | null
          score2?: number | null
          status?: string
          tournament_id?: string
          updated_at?: string | null
          winner_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "matches_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournaments"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string | null
          id: string
          message: string
          read: boolean
          related_id: string | null
          related_type: string | null
          title: string
          type: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          message: string
          read?: boolean
          related_id?: string | null
          related_type?: string | null
          title: string
          type: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          message?: string
          read?: boolean
          related_id?: string | null
          related_type?: string | null
          title?: string
          type?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string | null
          email: string | null
          first_name: string | null
          id: string
          is_admin: boolean | null
          is_moderator: boolean | null
          last_name: string | null
          phone: string | null
          reputation: number | null
          updated_at: string | null
          username: string
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          id: string
          is_admin?: boolean | null
          is_moderator?: boolean | null
          last_name?: string | null
          phone?: string | null
          reputation?: number | null
          updated_at?: string | null
          username: string
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          id?: string
          is_admin?: boolean | null
          is_moderator?: boolean | null
          last_name?: string | null
          phone?: string | null
          reputation?: number | null
          updated_at?: string | null
          username?: string
        }
        Relationships: []
      }
      reponses_formulaire: {
        Row: {
          comment_avezvous_entendu_parler_de_cet_vnement_: string | null
          commentaires_etou_questions: string | null
          id: number
          quels_sont_les_noms_des_personnes_prsentes_: string | null
          sans_titre: string | null
          serezvous_prsent_: string | null
          submitted_at: string | null
        }
        Insert: {
          comment_avezvous_entendu_parler_de_cet_vnement_?: string | null
          commentaires_etou_questions?: string | null
          id?: number
          quels_sont_les_noms_des_personnes_prsentes_?: string | null
          sans_titre?: string | null
          serezvous_prsent_?: string | null
          submitted_at?: string | null
        }
        Update: {
          comment_avezvous_entendu_parler_de_cet_vnement_?: string | null
          commentaires_etou_questions?: string | null
          id?: number
          quels_sont_les_noms_des_personnes_prsentes_?: string | null
          sans_titre?: string | null
          serezvous_prsent_?: string | null
          submitted_at?: string | null
        }
        Relationships: []
      }
      tournament_participants: {
        Row: {
          id: string
          registered_at: string | null
          status: string
          tournament_id: string
          user_id: string
        }
        Insert: {
          id?: string
          registered_at?: string | null
          status?: string
          tournament_id: string
          user_id: string
        }
        Update: {
          id?: string
          registered_at?: string | null
          status?: string
          tournament_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "tournament_participants_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournaments"
            referencedColumns: ["id"]
          },
        ]
      }
      tournaments: {
        Row: {
          community_id: string | null
          created_at: string | null
          created_by: string
          current_players: number
          description: string | null
          end_date: string
          entry_fee: number | null
          game: string
          id: string
          image_url: string | null
          max_players: number
          min_players: number
          name: string
          prizes: string | null
          registration_end: string | null
          registration_start: string | null
          rules: string | null
          start_date: string
          status: string
          type: string
        }
        Insert: {
          community_id?: string | null
          created_at?: string | null
          created_by: string
          current_players?: number
          description?: string | null
          end_date: string
          entry_fee?: number | null
          game: string
          id?: string
          image_url?: string | null
          max_players: number
          min_players?: number
          name: string
          prizes?: string | null
          registration_end?: string | null
          registration_start?: string | null
          rules?: string | null
          start_date: string
          status?: string
          type?: string
        }
        Update: {
          community_id?: string | null
          created_at?: string | null
          created_by?: string
          current_players?: number
          description?: string | null
          end_date?: string
          entry_fee?: number | null
          game?: string
          id?: string
          image_url?: string | null
          max_players?: number
          min_players?: number
          name?: string
          prizes?: string | null
          registration_end?: string | null
          registration_start?: string | null
          rules?: string | null
          start_date?: string
          status?: string
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "tournaments_community_id_fkey"
            columns: ["community_id"]
            isOneToOne: false
            referencedRelation: "communities"
            referencedColumns: ["id"]
          },
        ]
      }
      user_stats: {
        Row: {
          disputes_initiated: number | null
          disputes_received: number | null
          draws: number | null
          last_active: string | null
          losses: number | null
          total_matches: number | null
          tournament_wins: number | null
          user_id: string
          wins: number | null
        }
        Insert: {
          disputes_initiated?: number | null
          disputes_received?: number | null
          draws?: number | null
          last_active?: string | null
          losses?: number | null
          total_matches?: number | null
          tournament_wins?: number | null
          user_id: string
          wins?: number | null
        }
        Update: {
          disputes_initiated?: number | null
          disputes_received?: number | null
          draws?: number | null
          last_active?: string | null
          losses?: number | null
          total_matches?: number | null
          tournament_wins?: number | null
          user_id?: string
          wins?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      execute_sql: {
        Args: { query: string }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
